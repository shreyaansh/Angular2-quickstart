export class AuthorsService {
    getAuthors() {
        return {"authors": [
            {"name": "Author 1", "handle": "@author1"},
            {"name": "Author 2", "handle": "@author2"},
            {"name": "Author 3", "handle": "@author3"}
        ]};
    }
}
