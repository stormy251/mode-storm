import React, {useContext} from 'react';
import {ModePage} from 'lib/types/ModePage';
import Link from 'next/link';
import styled from 'styled-components';
import * as HomeZone from 'zones/home';
import {LaunchDarklyContext, UserContext} from 'zones/app';
import Typography from 'zones/app/components/Typography';
import {colors} from 'lib/theme';

const DiscoverPageContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;

const DiscoverMainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0 16px;
`;

const DiscoverSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 0 16px;
`;

const DiscoverSection = styled.section`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray.v300};
  border-radius: 4px;
  padding: 16px;
  margin: 16px 0;
`;

const DiscoverNewItem = styled.div`
  padding: 8px 10px;
  border-bottom: 1px solid ${colors.gray.v300};
  border-left: 6px solid transparent;
  :last-of-type {
    border-bottom: none;
  }
  a {
    color: ${colors.gray.v1100};
    line-height: 1.5em;
  }
  :hover {
    background: ${colors.blue.v100};
    border-left: 6px solid ${colors.blue.v500};
    a {
      text-decoration: underline;
    }
  }
`;

const DiscoverListFooter = styled.div`
  padding: 5px 16px;
  border-top: 1px solid ${colors.gray.v300};
`;

interface Props {
  pageTitle?: string;
}

const DiscoverPage: ModePage<Props> = () => {
  const {name} = useContext(UserContext);
  const {flags} = useContext(LaunchDarklyContext);

  const {isAdmin} = flags;

  const URLS = {
    helixAnnouncement: 'https://mode.com/blog/announcing-helix',
    introToBigValues: 'https://www.youtube.com/watch?v=Y41u33gV36I',
    sqlEditor: 'https://youtu.be/4dgfH5N4W_k',
    notebooks: 'https://youtu.be/RnqFqfqPzMw',
    chartBuilder: 'https://youtu.be/HVpxcigILDg',
    releaseNotes: 'https://updates.mode.com'
  };

  return (
    <>
      <DiscoverPageContainer>
        <DiscoverMainContentContainer>
          <DiscoverSection>
            <Typography type="Title">
              Hi {name}!
            </Typography>
            <Typography type="Subtitle">
              is admin - {isAdmin ? 'yes' : 'no'}
            </Typography>
            <Typography type="Subtitle">
              This is the place to discover all things Mode. Welcome.
            </Typography>
            <Link href="/home/[organizationId]/spaces/[spaceId]" as="/home/mode/spaces/123">
              <a>To Test Spaces</a>
            </Link>
            <br/>
            <br/>
            <Link href="/home/[organizationId]/data_sources/[dataSourceId]" as="/home/mode/data_sources/345">
              <a>To Test Data Sources</a>
            </Link>
            <br/>
            <br/>
            <Link href="/home/[organizationId]/spaces" as="/home/mode/spaces">
              <a>To all spaces route</a>
            </Link>
            <br/>
            <br/>
            <Link href="/editor/[organizationId]/reports/[reportId]" as="/editor/mode/reports/123456">
              <a>To Test Editor page</a>
            </Link>
            <br/>
            <br/>
            <Link href="/">
              <a>To Dummy Page</a>
            </Link>
          </DiscoverSection>
        </DiscoverMainContentContainer>
        <DiscoverSideContainer>
          <DiscoverSection>
            <Typography type="Title">
              What&apos;s New
            </Typography>
            <DiscoverNewItem>
              <a href={URLS.helixAnnouncement} target="_blank" rel="noopener noreferrer">Announcing: Helix</a>
            </DiscoverNewItem>
            <DiscoverNewItem>
              <a href={URLS.introToBigValues} target="_blank" rel="noopener noreferrer">Watch: Introducing Big Values</a>
            </DiscoverNewItem>
            <DiscoverListFooter>
              <a href={URLS.releaseNotes}  target="_blank" rel="noopener noreferrer">Read Release Notes</a>
            </DiscoverListFooter>
          </DiscoverSection>
          <DiscoverSection>
            <Typography type="Title">
              Getting Started Videos
            </Typography>
            <DiscoverNewItem>
              <a href={URLS.sqlEditor} target="_blank" rel="noopener noreferrer">SQL Editor</a>
            </DiscoverNewItem>
            <DiscoverNewItem>
              <a href={URLS.notebooks} target="_blank" rel="noopener noreferrer">Notebooks</a>
            </DiscoverNewItem>
            <DiscoverNewItem>
              <a href={URLS.chartBuilder} target="_blank" rel="noopener noreferrer">Chart Builder</a>
            </DiscoverNewItem>
          </DiscoverSection>
          <div className="sidebar-container">
            <h4>Learn SQL and Python</h4>
            <p>Explore our tutorials to learn the tricks of the trade. Each lesson features practice problems and
              real-world data.</p>
            <a href="{{ ctrl.URLS.about_site.sql_school_intro }}" target="_blank" rel="noopener noreferrer">
              <div className="btn btn-lg btn-secondary">Go to Tutorials</div>
            </a>
          </div>
          <div className="sidebar-container">
            <h4>Build custom data viz</h4>
            <p>Learn to use HTML, CSS, and Javascript to display data in completely custom ways.</p>
            <a href="{{ ctrl.URLS.about_site.example_gallery }}" target="_blank" rel="noopener noreferrer">
              <div className="btn btn-lg btn-secondary">Explore the Gallery</div>
            </a>
          </div>
          <div className="sidebar-container">
            <h4>Helpful Links</h4>
            <div><a href="{{ ctrl.URLS.blog_home }}" target="_blank" rel="noopener noreferrer">Mode Blog</a></div>
            <div><a href="{{ ctrl.URLS.resources_home }}" target="_blank" rel="noopener noreferrer">Resources</a></div>
            <div><a href="{{ ctrl.URLS.about_site.example_gallery }}" target="_blank" rel="noopener noreferrer">Data Visualization
              Gallery</a></div>
          </div>
        </DiscoverSideContainer>
      </DiscoverPageContainer>
    </>
  );
};

DiscoverPage.zone = HomeZone;

DiscoverPage.getInitialProps = async (ctx) => {
  return {
    pageTitle: 'Discover'
  };
};

// Default export is a requirement for nextjs to know this is the export for the page.
export default DiscoverPage;
