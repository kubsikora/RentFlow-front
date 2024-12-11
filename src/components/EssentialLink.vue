<template>
  <div v-if="owner != ownerlocal || owner == 2">
    <q-item
      v-if="!children || children.length === 0"
      clickable
      :to="to"
      tag="router-link"
    >
      <div style="width: 100%; display: flex">
        <q-item-section v-if="icon" avatar>
          <q-icon :name="icon" size="27px" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ title }}</q-item-label>
          <q-item-label caption>{{ caption }}</q-item-label>
        </q-item-section>
      </div>
    </q-item>

    <q-expansion-item v-else :label="title">
      <template v-slot:header>
        <q-item style="margin-left: -15px">
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" size="27px" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
            <q-item-label caption>{{ caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>

      <template v-for="child in children" :key="child.title">
        <EssentialLink
          :title="child.title"
          :caption="child.caption"
          :link="child.link"
          :icon="child.icon"
          :to="child.to"
          :owner="child.owner"
          :children="child.children"
          style="margin-left: 25px"
        />
      </template>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { CheckIfOwner } from 'src/utils/CheckIfOwner';

defineOptions({
  name: 'EssentialLink',
});

const ownerlocal = CheckIfOwner();

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  to?: string;
  children?: EssentialLinkProps[];
  owner: number;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
  owner: 0,
  children: () => [] as EssentialLinkProps[],
});
</script>
