
export default function Languages() {
  return (
    <div className="techstack">
      {/* Programming Languages */}
      <div className="lang">
        <h1>
          <span className="badge badge-danger">SkiLLs</span>
        </h1>
      </div>
      <div className="grid-flex">
        <img src="https://img.icons8.com/color/480/000000/python.png" />
        <img src="https://img.icons8.com/color/96/000000/c-programming.png" />
      </div>

      {/*  Frameworks */}
      <div className="lang">
        <h1>
          <span className="badge badge-danger">Tools</span>
        </h1>
      </div>

      <div className="grid-flex">
        <img src="https://img.icons8.com/fluent/96/000000/github.png" />
        <img src="https://img.icons8.com/color/480/000000/visual-studio-code-2019.png" />
        <img src="https://img.icons8.com/color/480/000000/intellij-idea.png" />
        <img src="https://img.icons8.com/color/144/000000/git.png" />
      </div>
    </div>
  );
}
