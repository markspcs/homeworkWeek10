module.exports = {
    managerHtml (e) {
        return `<div class="col mb-4">
                    <div class="card h-100 shadow rounded">
                        <div class="card-header">
                         <h2>${e.name}</h2>
                         <h2><i class="fas fa-glasses"> </i> Manger</h2>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title border border-dark p-2">ID: ${e.id}</h5>
                            <h5 class="card-title border border-dark p-2">Email: ${e.email}</h5>
                            <h5 class="card-title border border-dark p-2">Office#: ${e.officeNumber}</h5>
                        </div>
                    </div>
                </div>`;
    },
    engineerHtml (e)  {
        return `<div class="col mb-4">
                    <div class="card h-100 shadow rounded">
                        <div class="card-header">
                         <h2>${e.name}</h2>
                         <h2><i class="fas fa-glasses"> </i> Engineer</h2>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title border border-dark p-2">ID: ${e.id}</h5>
                            <h5 class="card-title border border-dark p-2">Email: ${e.email}</h5>
                            <h5 class="card-title border border-dark p-2">GitHub: ${e.github}</h5>
                        </div>
                    </div>
                </div>`;
    },
    internHtml (e)  {
        return `<div class="col mb-4">
                    <div class="card h-100 shadow rounded">
                        <div class="card-header">
                         <h2>${e.name}</h2>
                         <h2><i class="fas fa-glasses"> </i> Intern</h2>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title border border-dark p-2">ID: ${e.id}</h5>
                            <h5 class="card-title border border-dark p-2">Email: ${e.email}</h5>
                            <h5 class="card-title border border-dark p-2">school: ${e.school}</h5>
                        </div>
                    </div>
                </div>`;
    },
}
