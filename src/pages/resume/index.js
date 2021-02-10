import { ApolloProvider } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";
import React from 'react';

import { initializeApollo } from "Apollo/apolloClient";
import { useApollo } from "Apollo/apolloClient";
import componentToPDF from "Utils/componentToPDF";
import PDF from 'Components/templates/PDF/PDF';
import Resume from 'Components/organisms/Resume/Resume';

const ResumeQuery = gql`
  query ResumeQuery {
    bio {
      name
      tagline
      full_profile
      short_profile
      avatar
      socialLinks {
        key
        label
        link
        target
      }
    }
    skills,
    courses {
      name
      link
    }
    workExperience {
      from
      to
      title
      description
    }
    education {
      from
      to
      title
      description
    }
    languages {
      name
      level
    }
  }
`;

const ResumePage = (props) => {
  const { data, error, loading } = props;

  // TODO: Move to a component
  if (error) {
    return <div>Error... Oops!</div>
  }

  // TODO: Move to a component
  if (loading) {
    return <div>Loading...</div>
  }

  return <Resume data={data} />;
};

ResumePage.getInitialProps = async ({ req, res, query }) => {
  const exportPDF = query.download === 'true';
  const isServer = !!req;

  // Workaround for SSR
  const apolloClient = initializeApollo();

  const { data, error, loading } = await apolloClient.query({
    query: ResumeQuery
  });

  if (isServer && exportPDF) {
    const buffer = await componentToPDF(
      <PDF><Resume data={data} shouldRenderPDF /></PDF>
    );

    res.setHeader('Content-disposition', 'attachment; filename="Veliz Fabian\'s Resume.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.end(buffer);
  }

  return { data, error, loading };
}

export default ResumePage;