'use client';

import { useCallback, useMemo, Fragment, useEffect, useState } from 'react';
import { ExternalLink } from 'react-feather';
import featuredWorks from '@/contents/featuredWorks';
import Dot from '@/components/home/Dot';

function HomeFeaturedWorks() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderTools = useCallback((item: { tools: string[] }) => {
    return (
      !!item.tools?.length && (
        <div className="text-grey-500">
          {item.tools.map((tool: string, index: number) => {
            return (
              <span key={`tool-${index}`}>
                {tool}
                {index < item.tools.length - 1 && <Dot />}
              </span>
            );
          })}
        </div>
      )
    );
  }, []);

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="mb-3 font-semibold text-base">Featured Works</h2>
      {isClient &&
        featuredWorks.list.map((item) => {
          return (
            <div
              key={`work-${item.id}`}
              className="flex flex-col md:flex-row mb-8"
            >
              <div className="expi__duration md:w-48 shrink-0 mb-0.5 text-xs">
                <p className="text-grey-100 mb-1">{item.type}</p>
                <span className="text-grey-300">{item.date}</span>
                {item.archi && (
                  <>
                    <Dot />
                    <span className="text-grey-500">{item.archi}</span>
                  </>
                )}
              </div>
              <div className="expi__content space-y-1">
                <h3 className="font-medium">
                  {item.url ? (
                    <a
                      className="flex items-center gap-1.5 hover:underline"
                      href={item.url}
                      target="_blank"
                    >
                      {item.name} <ExternalLink size="14" className="mb-0.5" />
                    </a>
                  ) : (
                    item.name
                  )}
                </h3>
                <p className="text-grey-200">{item.role}</p>
                {item.description && (
                  <p
                    className="text-grey-300 !my-1.5"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                )}
                {renderTools(item)}
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default HomeFeaturedWorks;
