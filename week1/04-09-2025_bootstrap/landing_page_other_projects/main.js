// =========================================================
// Load projects from JSON
// =========================================================
async function loadProjects() {
  try {
    const response = await fetch("projects.json");
    if (!response.ok) throw new Error("Could not load projects.json");
    return await response.json();
  } catch (err) {
    console.error("Error loading projects:", err);
    return [];
  }
}

// =========================================================
// Build raw.githubusercontent URL for index.html
// =========================================================
function buildRawUrl(project) {
  const folderPart = project.folder ? `/${project.folder}` : "";
  return `https://raw.githubusercontent.com/${project.repo}/${project.branch}${folderPart}/index.html`;
}

// =========================================================
// Render project cards
// =========================================================
function renderProjects(projects) {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  projects.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">by ${p.author}</p>
          <div class="mt-auto">
            <button class="btn btn-primary w-100 mb-2" onclick="updateProject(${index})">Update</button>
            <iframe id="preview-${index}" class="w-100 border rounded" style="height: 200px;"></iframe>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Save projects globally
  window._projects = projects;
}

// =========================================================
// Fetch index.html and display in iframe
// =========================================================
async function updateProject(index) {
  const project = window._projects[index];
  const url = buildRawUrl(project);

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Not found");
    const html = await response.text();
    document.getElementById(`preview-${index}`).srcdoc = html;
  } catch (err) {
    document.getElementById(`preview-${index}`).srcdoc =
      `<p style="color:red; padding:1em;">Failed to load from ${url}</p>`;
  }
}

// =========================================================
// Update all projects at once
// =========================================================
function updateAll() {
  window._projects.forEach((_, index) => updateProject(index));
}

// =========================================================
// Initialize
// =========================================================
document.addEventListener("DOMContentLoaded", async () => {
  const projects = await loadProjects();
  renderProjects(projects);
});

