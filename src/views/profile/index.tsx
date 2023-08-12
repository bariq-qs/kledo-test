import "assets/styles/scss/pages/login.scss";

const Profile = () => {
  return (
    <div className='container-profile'>
      <div className='wrap-form'>
        <p className=' text-5xl text-center font-bold mb-5'>Profile</p>
        <div className='card-form p-5 md:p-14'>
          <div className='mb-4'>
            <label className='mb-1'>Nama</label>
            <p className=' font-bold w-1/2 md:w-3/5'>Bariq Qushoyyi Shobriy</p>
          </div>
          <div className='mb-4'>
            <label className='mb-1'>Alamat</label>
            <p className=' font-bold w-1/2 md:w-3/5'>Surabaya, Jawa Timut</p>
          </div>
          <div className='mb-4'>
            <label className='mb-1'>No. HP</label>
            <p className=' font-bold w-1/2 md:w-3/5'>082134196300</p>
          </div>
          <div className='mb-4'>
            <label className='mb-1'>Email</label>
            <p className=' font-bold w-1/2 md:w-3/5'>bariqqushoyyi@gmail.com</p>
          </div>
          <div className=''>
            <label className='mb-1'>Motto</label>
            <p className=' font-bold w-1/2 md:w-3/5'>The best thing about a boolean is even if you are wrong, you are only off by a bit.</p>
          </div>
          <img src="https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/04/06/Tony-Stark-atau-Iron-Man-364921409.jpg" className="h-28 w-28 rounded-full absolute top-0 right-0 m-5 md:m-10" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
