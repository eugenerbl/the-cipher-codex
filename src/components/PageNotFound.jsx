import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <>
          <h1>404</h1><br/>
          <p>
            You're probably searching for something that isn't here. But perhaps it was never 
            meant to be found. <Link to="/the-cipher-codex">Head back to the home page.</Link>
          </p>
          <p className="hiddenText">
            Zhoo, duhq'w brx fohyhu? Nhhs rq ghfrglqj!
          </p>
        </>
      )
}

export default PageNotFound;