class Subject {
    constructor(name, teacher, students) {
        this.name = name;
        this.teacher = teacher;
        this.students = students;
    }
    getInfo() {
        return `Subject: ${this.name}, Teacher: ${this.teacher}, Students: ${this.students}`;
    }
    addStudent(student) {
        if (this.students.length >= 20) {
            return;
        } else {
            this.students.push(student);
        }
    }
    isStudentInSubject(student) {
        return this.students.includes(student);
    }
    getStudents() {
        return this.students;
    }
    getTeacher() {
        return this.teacher;
    }
}

const subjects = [];

const subject = new Subject(
    'Math',
    'John',
    ['Bob', 'Alice']
);
subjects.push(subject);
const subject2 = new Subject(
    'English',
    'John',
    ['Bob', 'Mary']
);
subjects.push(subject2);
const subject3 = new Subject(
    'History',
    'John',
    ['Steven', 'John']
);
subjects.push(subject3);
const subject4 = new Subject(
    'Science',
    'John',
    ['Bob', 'Mario']
);
subjects.push(subject4);

for (let subject of subjects) {
    document.write(`${subject.getInfo()}<br>`);
}

const studentInSubjects = (student) => {
    const totalSubjects = [];
    for (let subject of subjects) {
        if (subject.isStudentInSubject(student)) {
            totalSubjects.push(subject.name);
        }
    }
    return totalSubjects;
}
document.write(`<h2>Bob is in these subjects</h2>`)
document.write(`${studentInSubjects('Bob')}<br>`);
document.write(`<p>Quantity of subjects: ${studentInSubjects('Bob').length}</p>`);