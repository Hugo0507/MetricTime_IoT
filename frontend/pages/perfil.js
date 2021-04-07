import Layout from "../components/Layout";
import InfoProfile from "../components/InfoProfile";
import ConfigToken from "../components/ConfigToken";

export default function Profile() {
  return (
    <Layout notHeader={true}>
      <div className="p-5 bg-gray-100">
        <InfoProfile />
        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>
        <ConfigToken />
      </div>
    </Layout>
  );
}
