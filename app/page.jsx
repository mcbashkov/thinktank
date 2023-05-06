import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Mencari & Berbagi
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Prompt AI</span>
    </h1>
    <p className='desc text-center'>
      ThinkTank adalah platform open-source untuk mencari dan berbagi "Prompt" AI
    </p>

    <Feed />
  </section>
);

export default Home;
