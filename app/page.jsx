import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      The First AI-powered social platform 
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> in Indonesia</span>
    </h1>
    <p className='desc text-center'>
      Dedicated to the exploration and exchange of groundbreaking "Prompt" Ideas and Innovations
    </p>

    <Feed />
  </section>
);

export default Home;
