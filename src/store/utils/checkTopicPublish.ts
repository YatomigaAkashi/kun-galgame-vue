// API request format
import { EditCreateTopicRequestData, EditUpdateTopicRequestData } from '@/api'

// Global message component (top)
import Message from '@/components/alert/Message'

// Type guard to determine if EditUpdateTopicRequestData contains tid
const isEditUpdateTopicData = (data: any): data is EditUpdateTopicRequestData =>
  typeof data.tid !== 'undefined'

// Check if user input is valid when publishing
export const checkTopicPublish = (
  textCount: number,
  topicData: EditCreateTopicRequestData | EditUpdateTopicRequestData
): boolean => {
  // Check tid
  if (isEditUpdateTopicData(topicData)) {
    // Topic ID should not be zero
    if (!topicData.tid) {
      Message('Failed to resolve topic', '未能解析话题 ID', 'error')
      return false
    }
  }

  // Check title
  if (!topicData.title.trim()) {
    // If the title is empty, show a warning
    Message('Title cannot be empty!', '标题不可为空！', 'warn')
    return false
  }

  // Check content character count
  if (!textCount) {
    // If the content is empty, show a warning
    Message('Content cannot be empty!', '内容不可为空！', 'warn')
    return false
  }
  if (textCount > 100007) {
    Message('Content max length is 100007!', '内容最大长度为100007！', 'warn')
    return false
  }

  // Check tags
  if (!topicData.tags.length) {
    Message('Please use at least one tag!', '请至少使用一个标签！', 'warn')
    return false
  }

  // Check category
  if (!topicData.category.length) {
    Message(
      'Please select at least one category!',
      '请至少选择一个分类！',
      'warn'
    )
    return false
  }

  // If all checks pass, return true
  return true
}
