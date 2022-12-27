import { projectList } from "common/constant/projectList";

const History = () => {
  return (
    <div className={`w-full`}>
      {projectList.map(({ title, period, environment, mainJob }, key) => (
        <div
          className={`first:mt-0 mt-20 shadow-md px-6 py-8 leading-relaxed bg-gray-50 md:flex`}
          key={key}
        >
          <section className={`pr-5 mb-5 lg:w-1/4`}>
            <strong className={`mt-10`}>{title}</strong>
            <p className={`text-neutral-400 text-sm`}>{period}</p>
          </section>
          <section className="lg:w-3/4">
            <div className={`border-l-2 mb-5 text-left`}>
              <div className="ml-3">
                {environment.map((f, i) => (
                  <>
                    <div
                      key={i}
                      className={`text-gray-400 text-sm leading-relaxed`}
                    >
                      &nbsp;{`- ${f}`}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className={`mb-5 text-left`}>
              <div className="ml-3">
                {mainJob.map((t, i) => (
                  <>
                    <div key={i} className={`text-sm leading-relaxed`}>
                      &nbsp;{`· ${t}`}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};
export default History;
