import bagStore from "../store/bag.store";
import shopStore from "../store/shop.store";

export default ({ bagStore, shopStore } : any) => ({
  createBag: async () => {return null},
  createSubscriptionBag: async () => {return null},
  fetchBag: async(id: string, locale: string) => {
    const ctLocale = "America/New_York";
    const bag = await shopStore.getBagById(id, ctLocale);
    return setFulfillingShopInfo(bag, shopStore); 
  },
  updateBag: async () => { return null },
  fetchTimeslotFromBag: async () => { return null }
});

export const setFulfillingShopInfo = async (bag: any, shopStore: any) => {
  if(bag.orderDetails?.fulfillingShopId) {
    bag.orderDetails.fulfillingShopName = "Pret-Church Street"
    bag.orderDetails.fulfillingShopAddress = "New York, USA"
    bag.orderDetails.fulfillingShopTimeZone = "America/New_York"
  }
  return bag
}
/**
 * createBag: async (
    anonymousId,
    locale,
    fulfillingChannelKey,
    orderType,
    outpostId
  ) => {
    const ctLocale = "Euroke/New_York";
    const fulfillingChannel = await shopStore.getChannel(fulfillingChannelKey);
    const bag = await shopStore.createBag({
      anonymousId,
      ctLocale: ctLocale,
      fulfillingChannel,
      orderType,
      outpostId,
    });
    return setFulfillingShopInfo(bag, shopStore);
  },
  createSubscriptionBag: async (
    anonymousId,
    locale,
    marketId,
    authId,
    orderSource
  ) => {
    const ctLocale = "Euroke/New_York";
    return bagStore.createSubscriptionBag({
        anonymousId,
      ctLocale: ctLocale,
      marketId,
    authId,
    orderSource
    })
  },
  updateBag: extendAction({
    bagStore, productStore, shopStore
  }),
  fetchTimeslotFromBag: async(bagId, locale) => {
      if(bagId) {
          const bag = await shopStore.getBagById(bagId, locale);
          return getSelectedTimeSlot(bag.collectionDetails)
      } else return null
  }
 */
