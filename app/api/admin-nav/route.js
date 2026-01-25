import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextResponse } from 'next/server'

export async function GET() {
  const artworkDir = path.join(process.cwd(), 'content/artwork')
  
  if (!fs.existsSync(artworkDir)) {
    return NextResponse.json([])
  }
  
  const files = fs.readdirSync(artworkDir)
  
  // Get all artwork with their dates to sort them
  const artwork = files
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(artworkDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      
      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort newest first (same as CMS default)
  
  return NextResponse.json(artwork)
}
