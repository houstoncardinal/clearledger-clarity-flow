import { useState } from 'react';
import { 
  X, 
  Calendar, 
  FileText, 
  Video, 
  Image, 
  Globe,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Hash,
  Send,
  Save,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ContentCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: any) => void;
}

const ContentCreationModal = ({ isOpen, onClose, onSubmit }: ContentCreationModalProps) => {
  const [contentType, setContentType] = useState('blog');
  const [platform, setPlatform] = useState('LinkedIn');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const platforms = [
    { name: 'LinkedIn', icon: Linkedin, color: '#0077B5' },
    { name: 'Instagram', icon: Instagram, color: '#E4405F' },
    { name: 'Twitter', icon: Twitter, color: '#1DA1F2' },
    { name: 'Facebook', icon: Facebook, color: '#1877F2' },
    { name: 'YouTube', icon: Youtube, color: '#FF0000' },
    { name: 'Website', icon: Globe, color: '#6B7280' }
  ];

  const contentTypes = [
    { type: 'blog', label: 'Blog Post', icon: FileText },
    { type: 'video', label: 'Video', icon: Video },
    { type: 'image', label: 'Image', icon: Image },
    { type: 'event', label: 'Event', icon: Calendar },
    { type: 'case-study', label: 'Case Study', icon: FileText }
  ];

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    const contentData = {
      title,
      content,
      type: contentType,
      platform,
      scheduledDate,
      tags,
      status: 'draft'
    };
    onSubmit(contentData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Create New Content</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="p-6">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Content Details</TabsTrigger>
              <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              {/* Content Type Selection */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Content Type
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {contentTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <button
                        key={type.type}
                        onClick={() => setContentType(type.type)}
                        className={`p-4 border rounded-xl flex flex-col items-center space-y-2 transition-all ${
                          contentType === type.type
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Platform Selection */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Platform
                </label>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {platforms.map((platformOption) => {
                    const IconComponent = platformOption.icon;
                    return (
                      <button
                        key={platformOption.name}
                        onClick={() => setPlatform(platformOption.name)}
                        className={`p-4 border rounded-xl flex flex-col items-center space-y-2 transition-all ${
                          platform === platformOption.name
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                        <span className="text-sm font-medium">{platformOption.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter content title..."
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Content */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your content here..."
                  rows={6}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
                      <Hash className="w-3 h-3" />
                      <span>{tag}</span>
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag..."
                    className="flex-1 p-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button onClick={addTag} size="sm">
                    Add
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scheduling" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Content</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Scheduled Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium">Best Time</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {platform === 'LinkedIn' && 'Tuesday-Thursday, 9-11 AM'}
                        {platform === 'Instagram' && 'Monday-Friday, 2-3 PM'}
                        {platform === 'Twitter' && 'Monday-Friday, 12-1 PM'}
                        {platform === 'Facebook' && 'Thursday-Sunday, 1-4 PM'}
                        {platform === 'YouTube' && 'Thursday-Sunday, 2-4 PM'}
                        {platform === 'Website' && 'Any time'}
                      </p>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Send className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">Auto Post</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Content will be automatically posted at the scheduled time
                      </p>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Save className="w-4 h-4 text-purple-500" />
                        <span className="text-sm font-medium">Save Draft</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Save as draft for later editing and scheduling
                      </p>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border border-border rounded-lg p-4">
                                         <div className="flex items-center space-x-2 mb-4">
                       {(() => {
                         const platformData = platforms.find(p => p.name === platform);
                         const IconComponent = platformData?.icon;
                         return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
                       })()}
                       <span className="font-medium">{platform}</span>
                       <Badge variant="outline" className="capitalize">{contentType}</Badge>
                     </div>
                    
                    {title && (
                      <h3 className="text-lg font-bold mb-2">{title}</h3>
                    )}
                    
                    {content && (
                      <p className="text-foreground mb-4">{content}</p>
                    )}
                    
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-border">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="outline" onClick={() => onSubmit({ ...{ title, content, type: contentType, platform, scheduledDate, tags }, status: 'draft' })}>
              Save Draft
            </Button>
            <Button onClick={handleSubmit}>
              Schedule Content
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreationModal; 