<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<span
	class="rounded bg-surface-container px-2 py-1 font-label text-[10px] text-on-surface-variant uppercase"
>
	{label}
</span>
