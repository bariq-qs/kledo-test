import { connect } from "react-redux";

const Dashboard = (props: any) => {
  const { user } = props;
  return (
    <div className='card flex'>
      <div className='title'>Dashboard</div>
      <div
        className=' rounded-lg w-3/4 m-auto h-1/2 p-5 flex items-center justify-center'
        style={{ background: "#F2F2F2" }}
      >
        <div className=''>
          <p className=' text-4xl font-bold text-center text-grey4'>
            Selamat Datang
          </p>
          <p className=' text-2xl font-bold text-center text-grey4'>{user?.name}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }: any) => {
  const { data } = user;
  return {
    user: data?.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
