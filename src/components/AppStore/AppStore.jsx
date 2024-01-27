import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";

const AppStore = () => {
  return (
    <div className="bg-gray-100 py-14">
      <div className="container">
        <div className="grid items-center">
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="text-xl sm:text-4xl font-semibold text-center text-gray-700">
              <h1>Burger King is available for Android and iOS</h1>
              <div className="flex justify-center flex-wrap items-center">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt=""
                    className="max-w-[100px] sm:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt=""
                    className="max-w-[100px] sm:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
