import '../../sass/style.scss';

const Sassy = () => {
  return (
    <div className="container">  
        <h1>Sassy in React</h1>
        <p>
          Sass stands for Syntactically Awesome Stylesheets which is a CSS
          extension that gives us more powerful CSS.
        </p>
        <div className="button-container">
          <button className="button button-container--small">Small</button>
          <button className="button button-container--large">Large</button>
        </div>
    </div>
  );
};

export default Sassy;
