import libgen from 'libgen';

const actions = {
  search: async ({ request }) => {
    let data = await request.formData();
    let query = data.get("query");
    const options = {
      mirror: "http://libgen.is",
      query,
      count: 10,
      sort_by: "year",
      reverse: true
    };
    let resultarray = [];
    try {
      const data2 = await libgen.search(options);
      let n = data2.length;
      while (n--) {
        let jsonobj = {
          title: data2[n].title,
          author: data2[n].author,
          pages: data2[n].pages,
          link: "http://libgen.is/book/index.php?md5=" + data2[n].md5.toLowerCase()
        };
        resultarray.push(jsonobj);
      }
    } catch (err) {
      console.error(err);
    }
    const newquery = query.split(" ").join("+");
    const openlibresponse = await fetch(`http://openlibrary.org/search.json?q=${newquery}`);
    const output = await openlibresponse.json();
    if (resultarray.length != 0) {
      return { result: resultarray, success: true, openlibresults: output.num_found };
    } else {
      return { success: false };
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 2;
const component = async () => (await import('./_page.svelte-6808c513.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-fc3abde8.js';
const imports = ["_app/immutable/components/pages/_page.svelte-fc3abde8.js","_app/immutable/chunks/index-c50cc6f5.js","_app/immutable/chunks/parse-f0c618df.js","_app/immutable/chunks/singletons-c63ec924.js"];
const stylesheets = ["_app/immutable/assets/_page-bbb80b9c.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=2-7812dd4f.js.map
