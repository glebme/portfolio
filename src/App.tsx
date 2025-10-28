import './App.css';
import Landing from "./components/Landing/Landing.tsx";
import Content from "./components/Content/Content.tsx";
import AboutMe from "./components/Content/AboutMe/AboutMe.tsx";
import Projects from "./components/Content/Projects/Projects.tsx";
import Blog from "./components/Content/Blog/Blog.tsx";

const App = () => {
  return (
    <div className="main">
        <title>Tommy Huy Gia Truong</title>
        <Landing/>
        <Content>
            <AboutMe/>
            <Projects/>
            <Blog/>
        </Content>
    </div>
  );
};

export default App;
