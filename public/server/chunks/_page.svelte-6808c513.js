import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from './index-b4c6a312.js';
import './uneval-c005139b.js';

const css$2 = {
  code: ".card.svelte-9uf0vp{background-color:aqua;text-align:center;font-size:large;font-weight:500;margin-left:auto;margin-right:auto;margin-top:12px;padding-top:10px;padding-bottom:15px;padding-left:4px;padding-right:4px;width:400px;height:fit-content}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { author = "" } = $$props;
  let { link = "" } = $$props;
  let { pages = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css$2);
  return `<div class="${"card svelte-9uf0vp"}"><p class="${"Title"}">${escape(title)}</p>
	<p class="${"Author"}">${escape(author)}</p>
	${pages ? `<p class="${"Author"}">${escape(pages)} pages</p>` : ``}
	<div class="${"Link"}"><a${add_attribute("href", link, 0)} target="${"_blank"}" rel="${"noreferrer"}">Download link</a></div>
</div>`;
});
const durationUnitRegex = /[a-zA-Z]/;
const range = (size, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);
const css$1 = {
  code: ".wrapper.svelte-1w8rpx6{position:relative;display:flex;justify-content:center;align-items:center;width:var(--size);height:calc(var(--size) / 2.5)}.cube.svelte-1w8rpx6{position:absolute;top:0px;width:calc(var(--size) / 5);height:calc(var(--size) / 2.5);background-color:var(--color);animation:svelte-1w8rpx6-motion var(--duration) cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite}.pause-animation.svelte-1w8rpx6{animation-play-state:paused}@keyframes svelte-1w8rpx6-motion{0%{opacity:1}50%{opacity:0}100%{opacity:1}}",
  map: null
};
const Pulse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "1.5s" } = $$props;
  let { size = "60" } = $$props;
  let { pause = false } = $$props;
  let durationUnit = duration.match(durationUnitRegex)?.[0] ?? "s";
  let durationNum = duration.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-1w8rpx6"}" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --color: " + escape(color, true) + "; --duration: " + escape(duration, true)}">${each(range(3, 0), (version) => {
    return `<div class="${["cube svelte-1w8rpx6", pause ? "pause-animation" : ""].join(" ").trim()}" style="${"animation-delay: " + escape(version * (+durationNum / 10), true) + escape(durationUnit, true) + "; left: " + escape(version * (+size / 3 + +size / 15) + unit, true) + ";"}"></div>`;
  })}
</div>`;
});
const css = {
  code: ".Header.svelte-fuxnnd{text-align:center;margin-left:auto;margin-right:auto;margin-top:30px;padding:10px;width:400px;height:35px}.SearchBox.svelte-fuxnnd{text-align:center;margin-left:auto;margin-right:auto;margin-top:-25px;padding:10px;width:400px;height:35px}.SearchButton.svelte-fuxnnd{text-align:center;margin-left:auto;margin-right:auto;margin-top:-25px;padding:10px;width:400px;height:35px}.OpenLib.svelte-fuxnnd{text-align:center}.Pulse.svelte-fuxnnd{margin-left:48.5%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let search_query = "";
  let old_query = "";
  let { form } = $$props;
  let loading = false;
  const stoploading = () => loading = false;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<h1 class="${"Header svelte-fuxnnd"}">Ebook Finder</h1>
<form method="${"POST"}" action="${"?/search"}" class="${"SearchBox svelte-fuxnnd"}"><input type="${"search"}" name="${"query"}"${add_attribute("value", search_query, 0)}></form>
<div class="${"SearchButton svelte-fuxnnd"}"><button formaction="${"?/search"}">Search</button></div>
${loading ? `<div class="${"Pulse svelte-fuxnnd"}">${validate_component(Pulse, "Pulse").$$render(
    $$result,
    {
      size: "45",
      color: "#FF3E00",
      unit: "px",
      duration: "1s"
    },
    {},
    {}
  )}</div>` : ``}
${form?.success ? `${stoploading() ? `` : ``}
	<div class="${"OpenLib svelte-fuxnnd"}">LibGen results for &quot;${escape(old_query)}&quot;</div>
	${each(form?.result, (result, i) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        title: result.title,
        author: result.author,
        link: result.link,
        pages: result.pages
      },
      {},
      {}
    )}`;
  })}
	<div class="${"OpenLib svelte-fuxnnd"}"><p>Hits found on OpenLibrary: ${escape(form.openlibresults)}</p></div>` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6808c513.js.map
