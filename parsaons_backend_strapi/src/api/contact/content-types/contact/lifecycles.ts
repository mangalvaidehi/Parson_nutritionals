import _ from "lodash";

export default {
  async afterCreate(event) {
    const { result } = event;
    // try {
    //   await strapi.plugin("email-designer").service("email").sendTemplatedEmail(
    //     {
    //       to: process.env.ADMIN_CONTACT_US_EMAIL || "parsonsnutritionals162@gmail.com",
    //     },
    //     {
    //       templateReferenceId: 1,
    //     },
    //     {
    //       user: result,
    //     }
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
  },
};

