<template>
  <div v-if="editor">
    <div class="w-fit flex flex-row gap-1 p-2 rounded-xl border border-(--ui-border)">
      <UButton
        icon="i-lucide-bold"
        :variant="editor.isActive('bold') ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        @click="editor.chain().focus().toggleBold().run()"
      />
      <UButton
        icon="i-lucide-italic"
        :variant="editor.isActive('italic') ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        @click="editor.chain().focus().toggleItalic().run()"
      />
      <UButton
        icon="i-lucide-code"
        :variant="editor.isActive('code') ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        @click="editor.chain().focus().toggleCode().run()"
      />
      <UButton
        icon="i-lucide-file-code"
        :variant="editor.isActive('codeBlock') ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleCodeBlock().run()"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      />
      <USeparator
        orientation="vertical"
        color="neutral"
        type="solid"
        class="h-8"
      />
      <UButton
        icon="i-lucide-pilcrow"
        :variant="editor.isActive('paragraph') ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().setParagraph().run()"
        @click="editor.chain().focus().setParagraph().run()"
      />
      <UButton
        icon="i-lucide-heading-1"
        :variant="editor.isActive('heading', { level: 1 }) ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleHeading({ level: 1 }).run()"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      />
      <UButton
        icon="i-lucide-heading-2"
        :variant="editor.isActive('heading', { level: 2 }) ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleHeading({ level: 2 }).run()"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      />
      <UButton
        icon="i-lucide-heading-3"
        :variant="editor.isActive('heading', { level: 3 }) ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleHeading({ level: 3 }).run()"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      />
      <UButton
        icon="i-lucide-heading-4"
        :variant="editor.isActive('heading', { level: 4 }) ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleHeading({ level: 4 }).run()"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      />
      <UButton
        icon="i-lucide-heading-5"
        :variant="editor.isActive('heading', { level: 5 }) ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleHeading({ level: 5 }).run()"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      />
      <UButton
        icon="i-lucide-heading-6"
        :variant="editor.isActive('heading', { level: 6 }) ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleHeading({ level: 6 }).run()"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      />
      <USeparator
        orientation="vertical"
        color="neutral"
        type="solid"
        class="h-8"
      />
      <UButton
        icon="i-lucide-list"
        :variant="editor.isActive('bulletList') ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleBulletList().run()"
        @click="editor.chain().focus().toggleBulletList().run()"
      />
      <UButton
        icon="i-lucide-list-ordered"
        :variant="editor.isActive('orderedList') ? 'soft' : 'ghost'"
        :disabled="!editor.can().chain().focus().toggleOrderedList().run()"
        @click="editor.chain().focus().toggleOrderedList().run()"
      />
      <USeparator
        orientation="vertical"
        color="neutral"
        type="solid"
        class="h-8"
      />
      <UButton
        icon="i-lucide-eraser"
        variant="ghost"
        @click="editor.chain().focus().unsetAllMarks().run()"
      />
    </div>
  </div>

  <TiptapEditorContent :editor="editor" />
</template>

<script setup lang="ts">
const { content } = defineProps<{ content: string }>()

const emit = defineEmits<{
  change: [content: string]
}>()

const editor = useEditor({
  extensions: [TiptapStarterKit],
  editorProps: {
    attributes: {
      class: 'prose prose-md dark:prose-invert m-0 [&_p]:my-0 focus:outline-none text-(--ui-text)',
    },
  },
})

watch(() => editor.value?.state.doc, () => {
  emit('change', editor.value?.getHTML() as string)
})

onMounted(() => {
  if (unref(editor)) {
    unref(editor)?.commands.setContent(content as string)
  }
})
</script>
