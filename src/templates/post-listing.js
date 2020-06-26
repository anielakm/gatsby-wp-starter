import React from "react";
import Link from "gatsby-link";
import Layout from '../layouts/layout'


const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const Blog = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    console.log(group)

    return (
        <Layout>



            <div >
                <div className="container">

                    <div>

                        {group.map(({ node }) => (
                            <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                                <Link to={`/${node.slug}`}>
                                    <h3>{node.title}</h3>
                                    <p className={"post-content"} dangerouslySetInnerHTML={{ __html: node.content.substring(3, 100).split(/\s+/).slice(0, 20).join(" ") }}></p>
                                </Link>


                            </div>
                        ))}
                        <div className="previousLink">
                            <NavLink test={first} url={"/blog/" + previousUrl} text="Go to Previous Page" />
                        </div>
                        <div className="nextLink">
                            <NavLink test={last} url={"/blog/" + nextUrl} text="Go to Next Page" />
                        </div>

                    </div>



                </div>
            </div>

        </Layout>
    );
};
export default Blog;
