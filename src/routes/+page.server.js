import libgen from 'libgen';
export const actions = {
    search: async ({ request }) => {
        let data = await request.formData();
        let query = data.get('query');
        const options = {
            mirror: 'http://libgen.is',
            query: query,
            count: 10,
            sort_by: 'year',
            reverse: true

        }
        console.log(query);
        let resultarray = [];
        try {
            const data = await libgen.search(options)
            let n = data.length
            console.log(data);
            while (n--) {
                let jsonobj = {
                    title: data[n].title,
                    author: data[n].author,
                    pages: data[n].pages,
                    link: 'http://libgen.is/book/index.php?md5=' + data[n].md5.toLowerCase()
                }
                resultarray.push(jsonobj);
            }
        } catch (err) {
            console.error(err)
        }
        const newquery = query.split(' ').join('+');
        const openlibresponse = await fetch(`http://openlibrary.org/search.json?q=${newquery}`);
        const output = await openlibresponse.json();
        if (resultarray.length != 0) {
            return { result: resultarray, success: true, openlibresults: output.num_found }
        } else {
            return { success: false }
        }

    }
};