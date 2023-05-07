import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      The First AI Social Platform From 
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>Indonesia</span>
    </h1>
    <p className='desc text-center'>
      ThinkTank is project by IDM-DAO called Kodaai-Lab, aims to enrich AI prompts and foster innovation in the realm of "Prompt" Artificial Intelligence.
    </p>

    <Feed />
  </section>
);

export default Home;
