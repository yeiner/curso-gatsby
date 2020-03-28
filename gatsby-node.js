const path = require('path');

exports.createPages = async ({graphql, actions}) => {

    const result = await graphql(`
        {
            allEducationJson {
            edges {
                node {
                slug
                }
            }
            }
        }
    `);

    result.data.allEducationJson.edges.forEach(element => {
        const {node} = element;

        actions.createPage({
            path: node.slug,
            component: path.resolve('./src/components/template.js'),
            context:{
                slug: node.slug
            }
        })
    });
   
}