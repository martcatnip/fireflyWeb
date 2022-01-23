# Data Modeling
Quite often, `relational data model` is the go-to approach when structuring data for an application. This is something tried-and-true for many years. Once mastered, it makes not only development, but the communication in the process, much easier.

We chose Firebase because it's readily available (minimal overhead). While relational data model looks suitable for this application, Firebase is NOT a relational database. We should model data in a way that strikes a balance between having a good relational structure while fit in Firebase.

## Entities

- Schools
- Project Volunteers/Staff (including teachers)
- Students
- Books
- Reading Activities
- Punch cards
- ...

## Entities/Tables in a relational model

In a thoroughly normalized relational data model, tables can be created as following (time stamps in each table not enumerated). 

### Schools

| Field Name | Data Type |
|------------|-----------|
| id         | integer   |
| name       | string    |
| city       | string    |
| province   | string    |
| createdAt  | timestamp |
| updatedAt  | timestamp |

### Project Volunteers/Staff

| Field Name  | Data Type |
|-------------|-----------|
| id          | integer   |
| name        | string    |
| schoolId    | integer   |
| roles       | string    |
| secondaryId | string    |

### Students

| Field Name  | Data Type |
|-------------|-----------|
| id          | integer   |
| name        | string    |
| age         | integer   |
| schoolId    | integer   |
| secondaryId | string    |

### Books

| Field Name  | Data Type |
|-------------|-----------|
| id          | integer   |
| title       | string    |
| isbn        | integer   |
| coverUrl    | string    |

### Reading Activities

| Field Name  | Data Type |
|-------------|-----------|
| id          | integer   |
| hostedBy    | integer   |
| enteredBy   | integer   |
| bookId      | integer   |
| type        | string    |

_type_: `reciting` or `game`

#### _Pivot table: Reading Activity & Participants (Students)_

(Many-to-many relationship between reading activities and students)

| Field Name  | Data Type |
|-------------|-----------|
| id          | integer   |
| activityId  | integer   |
| studentId   | integer   |

### Punch Cards

TBD

## Entities in a No-SQL database like Firebase

### Schools

```
{
    "schools": {
        "1": {
            "name": "school name",
            "city": "school city",
            "province": "school province"
        },
        "2": {
            "name": "school name",
            ....
        }
    }
}
```

### Project Volunteers/Staff

```
{
    "projectStaff": {
        "1": {
            "name": "staff name",
            "school": "uniquely identifiable school name",
            "roles": [
                "role 1, e.g. teacher, volunteer, etc.",
                "role 2"
            ],
            "secondaryId": "in case there are people with same name in the same school"
        },
        "2": {
            "name": "staff name",
            ....
        }
    }
}
```

### Students

```
{
    "students": {
        "1": {
            "name": "student name",
            "school": "uniquely identifiable school name",
            "age": "studnet age",
            "secondaryId": "in case there are people with same name in the same school"
        },
        "2": {
            "name": "student name",
            ....
        }
    }
}
```

### Books

```
{
    "books": {
        "1": {
            "title": "book title",
            "isbn": "ISBN",
            "coverUrl": "optional image URL"
        },
        "2": {
            "title": "book title",
            ....
        }
    }
}
```

### Reading Activities

```
{
    "readingActivities": {
        "1": {
            "hostedBy": "unique identifiable name of a teacher/volunteer",
            "enteredBy": "unique identifiable name of a teacher/volunteer",
            "book": "unique identifiable name or title of a book",
            "type": "exact string: either 'game' or 'reciting'",
            "participants": [
                "uniquely identifiable student name",
                "uniquely identifiable student name",
                ...            
            ]
        },
        "2": {
            "hostedBy": "unique identifiable name of a teacher/volunteer",
            ....
        }
    }
}
```

### Punch Cards

TBD 

---

**WORK IN PROGRESS**