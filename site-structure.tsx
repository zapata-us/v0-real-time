"use client"
import { SiteLayout } from "@/components/site-layout"
import { GlassContainer } from "@/components/glass-container"
import { motion } from "framer-motion"

export default function SiteStructure() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-8 mt-[13%]">
        <h1 className="text-3xl font-bold text-white mb-8">Site Structure</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary Navigation */}
          <GlassContainer className="col-span-full">
            <h2 className="text-xl font-bold text-white mb-4">Primary Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <NavItem title="Home" path="/" />
              <NavItem title="Collection" path="/collection" />
              <NavItem title="Brands" path="/brands" />
              <NavItem title="About" path="/about" />
              <NavItem title="Contact" path="/contact" />
              <NavItem title="Blog" path="/blog" />
              <NavItem title="Account" path="/account" />
              <NavItem title="Cart" path="/cart" />
            </div>
          </GlassContainer>

          {/* Homepage Structure */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Homepage</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Hero Section with Featured Watch
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Latest Releases (Current Implementation)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Brand Showcase with Animated Logos
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Promotional Banners (Seasonal Collections)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Market Insights (Current Chart Implementation)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Customer Testimonials Carousel
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Newsletter Subscription
              </li>
            </ul>
          </GlassContainer>

          {/* Collection/PLP Structure */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Collection (PLP)</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Search Bar (Enhanced with Autocomplete)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Advanced Filtering System
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Brand Filter</li>
                  <li>• Price Range</li>
                  <li>• Case Material</li>
                  <li>• Dial Color</li>
                  <li>• Case Size</li>
                  <li>• Watch Features</li>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Sorting Options
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Grid/List View Toggle
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Quick View Modal
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Pagination or Infinite Scroll
              </li>
            </ul>
          </GlassContainer>

          {/* Product Detail Page Structure */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Product Detail Page</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Image Gallery with Zoom
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Product Information
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Brand & Model</li>
                  <li>• Reference Number</li>
                  <li>• Price</li>
                  <li>• Availability</li>
                  <li>• Technical Specifications</li>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Add to Cart Button
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Add to Wishlist Button
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Tabbed Information
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Description</li>
                  <li>• Specifications</li>
                  <li>• Reviews</li>
                  <li>• Delivery & Returns</li>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Related Products
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Recently Viewed
              </li>
            </ul>
          </GlassContainer>

          {/* Cart & Checkout Structure */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Cart & Checkout</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Cart Page
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Product List with Images</li>
                  <li>• Quantity Adjustments</li>
                  <li>• Remove Items</li>
                  <li>• Price Calculations</li>
                  <li>• Promo Code Input</li>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Checkout Process
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Step 1: Shipping Information</li>
                  <li>• Step 2: Billing Information</li>
                  <li>• Step 3: Payment Method</li>
                  <li>• Step 4: Order Review</li>
                  <li>• Step 5: Confirmation</li>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Order Tracking
              </li>
            </ul>
          </GlassContainer>

          {/* Account Structure */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Account</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Dashboard Overview
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Order History & Tracking
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Wishlist Management
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Saved Addresses
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Payment Methods
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Account Settings
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Notifications Preferences
              </li>
            </ul>
          </GlassContainer>

          {/* Brand Pages Structure */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Brand Pages</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Brand Landing Pages
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Brand History</li>
                  <li>• Signature Collections</li>
                  <li>• Brand Values</li>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Featured Models
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Brand-specific Filters
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Brand News & Updates
              </li>
            </ul>
          </GlassContainer>

          {/* About & Contact Structure */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">About & Contact</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                About Us Page
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Company History</li>
                  <li>• Our Values</li>
                  <li>• Team Members</li>
                  <li>• Brand Partnerships</li>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Contact Page
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Contact Form</li>
                  <li>• Contact Information</li>
                  <li>• Location Map</li>
                  <li>• Business Hours</li>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                FAQ Section
              </li>
            </ul>
          </GlassContainer>

          {/* Blog Structure */}
          <GlassContainer>
            <h2 className="text-xl font-bold text-white mb-4">Blog</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Blog Landing Page
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Article Categories
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Watch Guides</li>
                  <li>• Brand Stories</li>
                  <li>• Industry News</li>
                  <li>• Collecting Tips</li>
                  <li>• Watch Care</li>
                </ul>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Article Detail Page
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Related Articles
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                Newsletter Signup
              </li>
            </ul>
          </GlassContainer>

          {/* Additional Features */}
          <GlassContainer className="col-span-full">
            <h2 className="text-xl font-bold text-white mb-4">Additional Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Search Functionality</h3>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>• Global Search Bar</li>
                  <li>• Autocomplete Suggestions</li>
                  <li>• Search Filters</li>
                  <li>• Search Results Page</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Authentication</h3>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>• Login/Register</li>
                  <li>• Social Login</li>
                  <li>• Password Recovery</li>
                  <li>• Account Verification</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Watch Services</h3>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>• Watch Valuation</li>
                  <li>• Trade-In Program</li>
                  <li>• Watch Repair</li>
                  <li>• Authentication Service</li>
                </ul>
              </div>
            </div>
          </GlassContainer>
        </div>
      </div>
    </SiteLayout>
  )
}

function NavItem({ title, path }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="backdrop-blur-sm bg-white/10 p-3 rounded-lg text-center text-white hover:bg-white/15 transition-colors cursor-pointer"
    >
      {title}
    </motion.div>
  )
}
