import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";

async function getData() {
  dotenv.config();

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const orgName = "TickLabVN";

  const data = {
    name: "",
    founded: "",
    description: "",
    avarta: "",
    activeMembers: "",
    publicRepositories: "",
    programmingLanguages: [],
    followers: "",
    contributors: "",
    recentAdditions: "",
    stargazersEvolution: {
      total: "",
      newPerDay: "",
    },
    codingHabits: {
      activeHours: "",
      recentlyUsedLanguages: "",
    },
    topRepositories: [],
    repositoryStats: {
      totalStars: "",
      totalForks: "",
      totalOpenIssues: "",
      totalClosedIssues: "",
    },
    growthTrends: "",
    issueResolutionTime: "",
    recentActivity: {
      pushEvents: [],
      issueEvents: [],
      pullRequestEvents: [],
      codingHabits: {
        morning: 29,
        afternoon: 91,
        evening: 1,
        night: 29,
      },
    },
    highActivityPeriods: "",
    topEngagement: "",
    contact: "",
    githubUrl: "",
    socialMedia: {
      twitter: "",
      linkedin: "",
      facebook: "",
    },
  };

  const { data: orgData } = await octokit.orgs.get({ org: orgName });
  // const { data: members } = await octokit.orgs.listMembers({ org: orgName });
  // const repos = await octokit.paginate(octokit.repos.listForOrg, {
  //   org: orgName,
  // });

  data.avarta = orgData.avatar_url;
  data.githubUrl = orgData.html_url;
  data.socialMedia.twitter = orgData.twitter_username;
  data.blogUrl = orgData.blog;
  data.contact = orgData.email;
  return data;
}

export { getData };