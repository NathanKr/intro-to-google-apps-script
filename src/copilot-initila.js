function moveOldEmails() {
  var inboxLabel = GmailApp.getUserLabelByName("Inbox");
  var oldInboxLabel =
    GmailApp.getUserLabelByName("inbox-old") ||
    GmailApp.createLabel("INBOX-old");
  var now = new Date();
  var twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  var threads = inboxLabel.getThreads();
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var oldestMessage = thread.getMessages()[0];
    var messageDate = oldestMessage.getDate();

    if (messageDate < twentyFourHoursAgo) {
      thread.moveToLabel(oldInboxLabel);
    }
  }
}
