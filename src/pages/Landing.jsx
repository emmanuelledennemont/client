import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> App
          </h1>
          <p>
            Track your job applications and never miss an opportunity Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
            nesciunt hic, eius ad animi nemo odio commodi repudiandae veritatis
            distinctio voluptatem, expedita aperiam, tempora saepe architecto
            nostrum tempore ab consequuntur!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
