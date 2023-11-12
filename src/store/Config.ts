import { create } from 'zustand';

export const useConfigStore = create(() => ({
  upwork_url: 'https://www.upwork.com/freelancers/~0199bd5921ffe7c943',
  linkedin_url: 'https://www.linkedin.com/in/erwinmesi/',
  meta_title: 'Erwin Mesias | Mesidotdev',
  meta_description: 'Full-Stack Web & Cross-Platform Mobile Developer',
  navbar_cta_text: 'Get in touch',
}));
