# Overview

Readers explore content on Devopedia by using the search box. When reading a specific article, there are also See Also links on the article that can take the reader to related articles. The goal of this project is to build an interactive knowledge graph that can help readers explore related articles.

Nodes of the graph are titles of articles published on Devopedia. Related topics are connected by graph edges. If the topics are closely related, their nodes with be closer together in the graph. Reader can click on a node to read the summary. The main article can be selected by a search box. This article will be the focus node around which the graph is displayed. When user moves to another connected node, the new node will become the focus node.

Some possible inspirations for implementing this are [D3's force-directed graph](https://medium.com/ninjaconcept/interactive-dynamic-force-directed-graphs-with-d3-da720c6d7811) or [TreeVerse](https://github.com/paulgb/Treeverse).

# Data

Real data from Devopedia is currently not available for this project but you can use fictitious test data. Every article's data will be in the following JSON schema:
```
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "Devopedia article",
    "type": "object",
    "required": [
        "title",
        "url",
        "authors",
        "modifiedTime",
        "summary"
    ],
    "properties": {
        "title": {
            "type": "string"
        },
        "url": {
            "type": "string",
            "format": "uri"
        },
        "authors": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "publishedTime": {
            "type": "string",
            "format": "date-time"
        },
        "modifiedTime": {
            "type": "string",
            "format": "date-time"
        },
        "featuredImg": {
            "type": "string",
            "format": "uri"
        },
        "summary": {
            "type": "string"
        },
        "discussion": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "question": {
                        "type": "string"
                    },
                    "answer": {
                        "type": "string"
                    }
                }
            }
        },
        "milestones": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "monthYear": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    }
                }
            }
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "seeAlso": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
}
```

An example article's JSON might be as follows:
```
{
    "title": "Example One",
    "url": "https://devopedia.org/example-one",
    "authors": ["jsmith", "ryadav"],
    "publishedTime": "2019-09-21T12:20:44+00:00",
    "modifiedTime": "2019-10-04T09:11:12+00:00",
    "featuredImg": "https://devopedia.org/link-to-img",
    "summary": "Summary of article appears here",
    "discussion": [
        {
            "question": "Some question here?",
            "answer": "Some answer here"
        },
        {
            "question": "Another question here?",
            "answer": "Another answer here"
        }
    ],
    "milestones": [
        {
            "monthYear": "Jun 2009",
            "description": "Some description here"
        }
    ],
    "tags": [ "some tag", "another tag" ],
    "seeAlso": [
        "Another Article Title",
        "One More Article Title"
    ]
}
```

For test purpose, you can read data of all articles from a single file. In reality, when integrated into Devopedia's main site, data will be supplied by an API.

# Deliverables

Project must be implemented in JavaScript or TypeScript with transpilation to JavaScript. Use of JS frameworks is not preferred but you can use Vue.js on the frontend since it's lightweight and can be integrated into Devopedia main site with minimal effort.

Code should support the following:
* Read article test data from file.
* Validate the data that it's conforms to JSON schema.
* Determine the nodes and edges. To keep things simple, edges are determined See Also items in the article. If article A, links to article B, the edge A-B gets weight 1. If B also links to A, the link ends up with weight 2. In this simple scheme, all edges can have weights 1 or 2. Weight 2 means the nodes will be closer.
* Code should have parameter to control maximum depth of edges to display. For example if depth is 2, the graph will show neighbours of the focus node plus neighbours of neighbours as well. This control is not exposed to user.
* Display the graph. Make it responsive and performant. Think about how much content to load and when.
* Make the graph interactive. Think about the design and ease of navigation.
