<script>
	import { enhance } from '$app/forms';
	// @ts-ignore
	import Card from '$lib/Card.svelte';
	import { Pulse } from 'svelte-loading-spinners';
	let search_query = '';
	let old_query = '';
	/**
	 * @type {{ success: any; result:any, openlibresults:any}}
	 */
	export let form;
	let loading = false;
	function load() {
		old_query = search_query;
		loading = true;
		form.success = false;
	}
	const stoploading = () => (loading = false);
</script>

<h1 class="Header">Ebook Finder</h1>
<form method="POST" action="?/search" use:enhance class="SearchBox" on:submit={load}>
	<input type="search" bind:value={search_query} name="query" />
</form>
<div class="SearchButton"><button formaction="?/search" on:click={load}>Search</button></div>
{#if loading}
	<div class="Pulse"><Pulse size="45" color="#FF3E00" unit="px" duration="1s" /></div>
{/if}
{#if form?.success}
	{#if stoploading()}{/if}
	<div class="OpenLib">LibGen results for "{old_query}"</div>
	{#each form?.result as result, i}
		<Card title={result.title} author={result.author} link={result.link} pages={result.pages} />
	{/each}
	<div class="OpenLib"><p>Hits found on OpenLibrary: {form.openlibresults}</p></div>
{/if}

<style>
	.Header {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 30px;
		padding: 10px;
		width: 400px;
		height: 35px;
	}
	.SearchBox {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: -25px;
		padding: 10px;
		width: 400px;
		height: 35px;
	}
	.SearchButton {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: -25px;
		padding: 10px;
		width: 400px;
		height: 35px;
	}
	.OpenLib {
		text-align: center;
	}
	.Pulse {
		margin-left: 48.5%;
	}
</style>
