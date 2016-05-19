// Handles cache to manage data
export default class {
    constructor() {
        this.DATA = {};
    }
    
    READ(NAME) {
        return this.DATA[NAME] }
    SET(N, V) {
        return this.DATA[N] = V }
    ENSURE(N, F) {
        return this.DATA[N] || (F(this.DATA, N), this.DATA[N]) }
}