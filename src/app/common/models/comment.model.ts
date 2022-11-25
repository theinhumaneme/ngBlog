export class Comment {
  authorId: string;
  content: string;
  dateCommented: Date;
  constructor(content) {
    (this.authorId = '13456789'),
      (this.content = content),
      (this.dateCommented = new Date());
  }
}
