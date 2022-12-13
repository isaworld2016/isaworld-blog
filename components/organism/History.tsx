import { projectList } from "common/constant/projectList";

const History = () => {
  return (
    <div className={`w-full text-left`}>
      {projectList.map(({ title, period, first, second, third }, key) => (
        <section
          className={`first:mt-0 mt-20 shadow-lg px-10 py-6 leading-relaxed`}
          key={key}
        >
          <section className={`mb-5`}>
            <strong className={`mt-10 w-full`}>[{title}]</strong>
            <p className={`text-neutral-400 text-sm`}>{period}</p>
          </section>
          <section className={`mb-3`}>
            <p>1. 환경</p>
            {first.map((f, i) => (
              <>
                <div key={i}>&nbsp;{`- ${f}`}</div>
              </>
            ))}
          </section>
          <section className={`mb-3`}>
            <p>2. 결과물</p>
            {second.map((s, i) => (
              <>
                <div key={i}>&nbsp;{`: ${s}`}</div>
              </>
            ))}
          </section>
          <section className={`mb-3`}>
            <p>3. 수행 업무</p>
            {third.map((t, i) => (
              <>
                <div key={i}>&nbsp;{`- ${t}`}</div>
              </>
            ))}
          </section>
        </section>
      ))}
    </div>
  );
};
export default History;
