export type School = {
    name: string,
    province: string,
    county?: string,
    city?: string,
    town?: string,
    village?: string,

};

export type PersonHistoryItem = {
    school: string,
    grade: number,
    startInYear: number,
    endInYear: number,
};

export type Person = {
    name: string,
    bornInYear: number,
    currentSchool: string,
    teachers: Person[],
    history?: PersonHistoryItem[],
};

export type Book = {
    title: string,
    isbn?: string,
    coverUrl?: string,
};

export type ReadingActivity = {
    book: string,
    hostedBy: string,
    enteredBy: string,
    activityDate: string,
    type: string, // game or reciting for now
    participants: Person[], // students
};
