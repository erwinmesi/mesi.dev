import { Fragment, useCallback } from 'react';
import { ExternalLink } from 'react-feather';
import workHistory from '@/contents/workHistory';
import Dot from '@/components/home/Dot';

function HomeWorkExperience() {
  const renderTools = useCallback((item: { tools: string[] }) => {
    return (
      !!item.tools.length && (
        <div className="text-grey-500">
          {item.tools.map((tool, index: number) => {
            return (
              <Fragment key={`tool--${index}`}>
                {tool}
                {index < item.tools.length - 1 && <Dot />}
              </Fragment>
            );
          })}
        </div>
      )
    );
  }, []);

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="mb-3 font-semibold text-base">Work Experience</h2>
      {workHistory.list.map((item) => {
        return (
          <Fragment key={`history--${item.id}`}>
            <div className="flex flex-col md:flex-row mb-8">
              <div className="expi__duration md:w-48 shrink-0 text-grey-500 mb-0.5 text-xs">
                {item.date}
              </div>
              <div className="expi__content space-y-1">
                <h3 className="font-medium">{item.role}</h3>
                <a
                  href={item.companyURL}
                  target="_blank"
                  className="flex items-center gap-1.5 hover:underline"
                >
                  {item.company}
                  <ExternalLink size="14" className="mb-0.5" />
                </a>
                {item.description && (
                  <p
                    className="text-grey-300 !my-1.5"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                )}
                {renderTools(item)}
              </div>
            </div>
          </Fragment>
        );
      })}
    </section>
  );
}

export default HomeWorkExperience;
