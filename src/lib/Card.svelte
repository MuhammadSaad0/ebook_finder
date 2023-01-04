<script>
	export let title = '';
	export let author = '';
	export let link = '';
	export let pages = '';
</script>

<div class="card">
	<p class="Title">{title}</p>
	<p class="Author">{author}</p>
	{#if pages}
		<p class="Author">{pages} pages</p>
	{/if}
	<div class="Link"><a href={link} target="_blank" rel="noreferrer">Download link</a></div>
</div>

<style>
	.card {
		background-color: aqua;
		text-align: center;
		font-size: large;
		font-weight: 500;
		margin-left: auto;
		margin-right: auto;
		margin-top: 12px;
		padding-top: 10px;
		padding-bottom: 15px;
		padding-left: 4px;
		padding-right: 4px;
		width: 400px;
		height: fit-content;
	}
</style>
