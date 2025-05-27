import { SiteLayout } from "@/components/site-layout"
import { GlassContainer } from "@/components/glass-container"

export default function SiteMap() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-8 mt-[13%]">
        <h1 className="text-3xl font-bold text-white mb-8">Site Map</h1>

        <GlassContainer className="mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-white/10 px-6 py-3 rounded-lg text-white font-medium mb-4">Homepage</div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-4">
              <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm text-center">Marketplace</div>
              <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm text-center">Brands</div>
              <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm text-center">About</div>
              <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm text-center">Contact</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm text-center w-full mb-2">
                  Marketplace
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="bg-white/5 px-4 py-2 rounded-lg text-white/80 text-xs text-center w-full mb-2">
                  Product Listing
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="bg-white/5 px-4 py-2 rounded-lg text-white/80 text-xs text-center w-full">
                  Product Detail
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm text-center w-full mb-2">
                  Account
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="bg-white/5 px-3 py-2 rounded-lg text-white/80 text-xs text-center">Login</div>
                  <div className="bg-white/5 px-3 py-2 rounded-lg text-white/80 text-xs text-center">Register</div>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="bg-white/5 px-3 py-2 rounded-lg text-white/80 text-xs text-center">Dashboard</div>
                  <div className="bg-white/5 px-3 py-2 rounded-lg text-white/80 text-xs text-center">Orders</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm text-center w-full mb-2">
                  Shopping
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="bg-white/5 px-4 py-2 rounded-lg text-white/80 text-xs text-center w-full mb-2">
                  Cart
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="bg-white/5 px-4 py-2 rounded-lg text-white/80 text-xs text-center w-full mb-2">
                  Checkout
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="bg-white/5 px-4 py-2 rounded-lg text-white/80 text-xs text-center w-full">
                  Order Confirmation
                </div>
              </div>
            </div>
          </div>
        </GlassContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Primary Pages</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Homepage</li>
              <li>• Marketplace (All Watches)</li>
              <li>• Brand Directory</li>
              <li>• About Us</li>
              <li>• Contact Us</li>
              <li>• Blog</li>
              <li>• FAQ</li>
              <li>• Terms & Conditions</li>
              <li>• Privacy Policy</li>
            </ul>
          </GlassContainer>

          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">E-commerce Pages</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Product Listing Page</li>
              <li>• Product Detail Page</li>
              <li>• Shopping Cart</li>
              <li>• Checkout</li>
              <li>• Order Confirmation</li>
              <li>• Order Tracking</li>
            </ul>
          </GlassContainer>

          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Account Pages</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Login</li>
              <li>• Register</li>
              <li>• Forgot Password</li>
              <li>• Account Dashboard</li>
              <li>• Order History</li>
              <li>• Wishlist</li>
              <li>• Saved Addresses</li>
              <li>• Account Settings</li>
            </ul>
          </GlassContainer>

          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Brand Pages</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Rolex</li>
              <li>• Cartier</li>
              <li>• Patek Philippe</li>
              <li>• Audemars Piguet</li>
              <li>• Hublot</li>
              <li>• Bvlgari</li>
              <li>• Other Brands...</li>
            </ul>
          </GlassContainer>
        </div>
      </div>
    </SiteLayout>
  )
}
