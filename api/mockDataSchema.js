export const schema = {
	"type": "object",
	"properties": {
		"characters": {
			"type": "array",
			"minItems": 3,
			"maxItems": 5,
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "number",
						"unique": true,
						"minimum": 1
					},
					"characterName": {
						"type": "string",
						"faker": "name.findName"
					},
					"urlIdentifier": {
						"type": "string",
						"faker": "lorem.word"
					},
					"isOnHiatus": {
						"type": "boolean",
					}
				},
				"required": ["id", "urlIdentifier", "isOnHiatus"]
			}
		},
		"threads": {
			"type": "array",
			"minItems": 30,
			"maxItems": 60,
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "number",
						"unique": true,
						"minimum": 1
					},
					"isMyTurn": {
						"type": "boolean",
					},
					"isArchived": {
						"type": "boolean"
					},
					"markedQueued": {
						"type": "Date",
						"faker": "date.recent"
					},
				},
				"required": ["id", "isMyTurn", "isArchived"]
			}
		},
		"news": {
			"type": "array",
			"minItems": 5,
			"maxItems": 5,
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "number",
						"unique": true,
						"minimum": 1
					},
					"userTitle": {
						"type": "string",
						"faker": "lorem.sentence"
					},
					"lastPostDate": {
						"type": "Date",
						"faker": "date.past"
					},
					"lastPostUrl": {
						"type": "string",
						"faker": "internet.url"
					},
					"isUnread": {
						"type": "boolean"
					}
				},
				"required": ["id", "userTitle", "lastPostDate", "lastPostUrl", "isUnread"]
			}
		}
	},
	"required": ["characters", "news"],
};
