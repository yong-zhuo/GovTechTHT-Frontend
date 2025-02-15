# GovTechTHT - Frontend

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/govtechtht-frontend)
![image](https://github.com/user-attachments/assets/c64898eb-1cce-4822-b117-89f15ec8f791)

A React web-app built for GovTech Take-Home Test (Frontend).

The app simulates a GPA monitoring tool, featuring sortable tables, student and teacher profiles and GPA trend visualisation in the form of line charts. Mock data is fetched from static JSON files.

The app is also hosted on Vercel: https://govtechtht-frontend.vercel.app/


## Assumptions & Interpretations

* Each student or teacher has a unique Id associated to them in the event of students/teachers with the same name.

* Cumulative GPA is equal to sum of all semester GPAs divided by the current semester.


## Run Website Locally

Clone the project

```bash
  git clone https://github.com/yong-zhuo/GovTechTHT-Frontend
```

Go to the project directory

```bash
  cd GovTechTHT-Frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
Navigate to `http://localhost:5173/` to view the website.


## Libraries Used

- React.Js
- Vite
- Chart.Js
- react-chartjs-2 (React components for Chart.js)
- TanStackTables
- React Router (For page routing)
- Tailwindcss (For styling)
- react-icons (For icons)
