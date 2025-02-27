## ArteUrbanaBackend

ArteUrbanaBackend is an API developed in **Node.js** using **Express** and **Sequelize**, with **PostgreSQL** as the database. The project is hosted on **Render** and utilizes **Supabase** for authentication and storage management.

### 🚀 Technologies Used:
- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL
- Supabase
- Render (Deployment)
---

## 📌 Routes and Endpoints

The API has several routes organized by resource:

### 🧑‍🎨 **Artists**
| Method  | Route                     | Description                         |
|---------|---------------------------|-------------------------------------|
| GET     | `/artistas/list`          | Lists all artists                  |
| GET     | `/artistas/getartista/:id`| Gets an artist by ID               |
| GET     | `/artistas/countdashboardadmin` | Count for admin dashboard |
| POST    | `/artistas/create`        | Creates a new artist               |
| PATCH   | `/artistas/updateartista/:id` | Updates an artist by ID     |
| DELETE  | `/artistas/deleteartista/:id` | Deletes an artist by ID     |

### 🎨 **Murals**
| Method  | Route                     | Description                         |
|---------|---------------------------|-------------------------------------|
| GET     | `/murais/list`            | Lists all murals                    |
| GET     | `/murais/getmural/:id`    | Gets a mural by ID                  |
| POST    | `/murais/create`          | Creates a new mural                 |
| PATCH   | `/murais/updatemural/:id` | Updates a mural by ID               |
| DELETE  | `/murais/deletemural/:id` | Deletes a mural by ID               |

### 🎭 **MuralsArtists**
| Method  | Route                          | Description                         |
|---------|--------------------------------|-------------------------------------|
| GET     | `/muraisartistas/list`        | Lists all artist-mural relations   |
| POST    | `/muraisartistas/create`      | Creates a new artist-mural relation |
| DELETE  | `/muraisartistas/delete/:id`  | Deletes a relation by ID           |

### 🎟️ **Events**
| Method  | Route                     | Description                         |
|---------|---------------------------|-------------------------------------|
| GET     | `/eventos/list`           | Lists all events                   |
| GET     | `/eventos/getevento/:id`  | Gets an event by ID                |
| POST    | `/eventos/create`         | Creates a new event                |
| PATCH   | `/eventos/updateevento/:id` | Updates an event by ID          |
| DELETE  | `/eventos/deleteevento/:id` | Deletes an event by ID          |

### 🏛️ **EventsMurals**
| Method  | Route                          | Description                         |
|---------|--------------------------------|-------------------------------------|
| GET     | `/eventosmurais/list`         | Lists all event-mural relations    |
| POST    | `/eventosmurais/create`       | Creates a new event-mural relation |
| DELETE  | `/eventosmurais/delete/:id`   | Deletes a relation by ID           |

---

## 📜 License
This project is under the ISC license.

---

