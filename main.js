const role = localStorage.getItem("role")

//Login
function login(event){
    event.preventDefault();
     
    const selectedRole = document.getElementById("role").nodeValue;
    localStorage.setItem("role", selectedRole);

    window.location.href = "student-dashbord.html";
}

//Logout
function Logout() {
    localStorage.clear();
    window.location.href = "login.html"
}

//Role Access Control
function allowRoles(allowedRoles){
    if(!role || !allowedRoles.includes(role)){
        alert("Access Denied!");
        window.location.href = "student-dashbord.html";
    }
}

//UI visibility control

function hidebyRole(){
    document.querySelectorAll("[data-role]").forEach(el => {
        const allowed = el.dataset.role.split(",");
        if(!allowed.includes(role)){
            el.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", hidebyRole);

//Mock Data (For Frontend Demo)
const students = [
    {
        id: "S001",
        name: "Imashi Senanayaka",
        badge: "Undergraduate",
        background: "Science",
        plan: " Software Engeneer"
    }
];

const lecturer = [
    {
        name: "Dr.Perera",
        department: "Computing",
        modules: ["OOP","SAD"]
    }
];

const modules = [
    {
        code: "CS101",
        name: "Programming",
        lecturer: "Dr.Perera"
    }
];

const assignment = [
    {
        module: "CS101",
        title: "Assignment 1",
        deadline: "2026-01-16",
        status: "Pending"
    }
];

//Load student profile
function loadProfile(){
    const student = student[0];
    document.getElementById("studentName").innerText = student.name;
    document.getElementById("studentID").innerText = student.id;
    document.getElementById("studentBadge").innerText = student.badge;
    document.getElementById("studentPlan").innerText = student.plan
}

//Load Lecturer Profile
function loadLecturerProfile(){
    const lecturer = lecturers[0];
    document.getElementById("lecturerName").innerText = lecturer.name;
    document.getElementById("lecturerDept").innerText = lecturer.department;
}

//Module Data (Frontend Demo)
const modules = [
    {
        code: "SE101",
        name: "Software Engeneer",
        lecturer: "Mr.Silva"
    },
    {
        code: "CS102",
        name: "Dtabase System",
        lecturer: "Dr.Perera"
    },
    {
        code: "CS103",
        name: "Web Development",
        lecturer: "Mr.Fernando"
    }
];

//Load Modules Table 
function loadModules() {
    const table = document.getElementById("moduleTable");
    if(!table) return;

    table.innerHTML = "";

    modules.forEach(module => {
        //' this symbole (above the Tab key)
        table.innerHTML +=
         <tr>
            <td>${module.code}</td>
            <td>${module.name}</td>
            <td>${module.lecturer}</td>
         </tr>;
    });
}

//View Module
function ViewModule(code){
    localStorage.setItem("selectedModule", code);
    window.location.href = ("modules.html");
}

//Auto Load
document.addEventListener("DOMContentLoaded", loadModuleTable);

//Load Assignment
function loadAssignments(){
    const container = document.getElementById("assignmentContainer");
    if(!container) return;

    assignment.forEach(a=> {
        <div class = "assignment-card">
            <h3>${a.title}</h3>
            <p>Module: ${a.module}</p>
            <p>Deadline: ${a.deadline}</p>
            <p>Status: ${a.status}</p>
        </div>
    });
}

//Admin Action
function deletItem(type){
    if (role !== "admin");{
        alert("Admin Only");
        return;
    }

    alert(type + "deleted successfully(Demo)");
}

//Page Auto Load Handler
document.addEventListener("DOMContentLoaded", () => {
    loadProfile();
    loadLecturerProfile();
    loadModules();
    loadAssignments();
});


