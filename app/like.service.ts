export class LikeService {
    likes = 1;
    getLikes() {
        return this.likes;
    }
    setLikes(counter) {
        this.likes += counter;
    }
}
