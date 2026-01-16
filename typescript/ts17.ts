abstract class Content {
  public readonly title: string;
  public readonly author: string;
  private published: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public publish() {
    this.published = true;
  }

  protected isPublished(): boolean {
    return this.published;
  }

  // Every content type must say what type it is
  abstract getType(): string;
}

class Assignment extends Content {
  private dueDate: string;

  constructor(title: string, author: string, dueDate: string) {
    super(title, author);
    this.dueDate = dueDate;
  }

  public editDueDate(newDueDate: string, isInstructor: boolean) {
    if (!this.isPublished() && isInstructor) {
      this.dueDate = newDueDate;
    } else {
      throw new Error("Cannot change due date after publishing or if not an instructor.");
    }
  }

  public getDueDate(): string {
    return this.dueDate;
  }

  getType(): string {
    return "Assignment";
  }
}
